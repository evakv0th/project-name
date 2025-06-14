import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

describe('UsersService', () => {
  let service: UsersService;
  let repo: Repository<User>;

  const mockUser = { id: 1, username: 'test', email: 'test@example.com', password: 'hashed' };
  const createUserDto = { username: 'test', email: 'test@example.com', password: 'hashed' };

  const mockRepository = {
    create: jest.fn().mockReturnValue(mockUser),
    save: jest.fn().mockResolvedValue(mockUser),
    find: jest.fn(),
    findOneBy: jest.fn(),
    delete: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    repo = module.get<Repository<User>>(getRepositoryToken(User));
  });

  it('should create a user', async () => {
    const result = await service.create(createUserDto);
    expect(repo.create).toHaveBeenCalledWith(createUserDto);
    expect(repo.save).toHaveBeenCalledWith(mockUser);
    expect(result).toEqual(mockUser);
  });
});
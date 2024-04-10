import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ReportsService } from './reports.service';
import { Report } from './report.entity';

describe('ReportsService', () => {
  let service: ReportsService;
  let repo: Repository<Report>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReportsService,
        {
          provide: getRepositoryToken(Report),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get(ReportsService);
    repo = module.get<Repository<Report>>(getRepositoryToken(Report));
  });

  it('should be defined', async () => {
    expect(service).toBeDefined();
  });

  it('Repository<Report> should be defined', async () => {
    expect(repo).toBeDefined();
  });
});

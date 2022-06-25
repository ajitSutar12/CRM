import { Test, TestingModule } from '@nestjs/testing';
import { ContactEmailMappingService } from './contact_email_mapping.service';

describe('ContactEmailMappingService', () => {
  let service: ContactEmailMappingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactEmailMappingService],
    }).compile();

    service = module.get<ContactEmailMappingService>(ContactEmailMappingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

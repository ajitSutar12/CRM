import { Test, TestingModule } from '@nestjs/testing';
import { ContactEmailMappingAttactmentService } from './contact_email_mapping_attactment.service';

describe('ContactEmailMappingAttactmentService', () => {
  let service: ContactEmailMappingAttactmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContactEmailMappingAttactmentService],
    }).compile();

    service = module.get<ContactEmailMappingAttactmentService>(ContactEmailMappingAttactmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

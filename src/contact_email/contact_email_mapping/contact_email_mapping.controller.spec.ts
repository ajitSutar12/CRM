import { Test, TestingModule } from '@nestjs/testing';
import { ContactEmailMappingController } from './contact_email_mapping.controller';

describe('ContactEmailMappingController', () => {
  let controller: ContactEmailMappingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactEmailMappingController],
    }).compile();

    controller = module.get<ContactEmailMappingController>(ContactEmailMappingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

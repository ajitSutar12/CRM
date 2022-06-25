import { Test, TestingModule } from '@nestjs/testing';
import { ContactEmailMappingAttactmentController } from './contact_email_mapping_attactment.controller';

describe('ContactEmailMappingAttactmentController', () => {
  let controller: ContactEmailMappingAttactmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContactEmailMappingAttactmentController],
    }).compile();

    controller = module.get<ContactEmailMappingAttactmentController>(ContactEmailMappingAttactmentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

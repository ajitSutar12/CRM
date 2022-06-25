import { Test, TestingModule } from '@nestjs/testing';
import { CompanyMasterController } from './company_master.controller';

describe('CompanyMasterController', () => {
  let controller: CompanyMasterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompanyMasterController],
    }).compile();

    controller = module.get<CompanyMasterController>(CompanyMasterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

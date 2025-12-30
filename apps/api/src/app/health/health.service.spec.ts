import { Test } from '@nestjs/testing';
import { HealthService } from './health.service';

describe('HealthService', () => {
  let service: HealthService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [HealthService],
    }).compile();

    service = app.get<HealthService>(HealthService);
  });

  describe('getData', () => {
    it('should return "ok"', () => {
      expect(service.getData()).toEqual({ status: 'ok' });
    });
  });
});

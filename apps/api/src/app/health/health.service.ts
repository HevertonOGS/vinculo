import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  public getData(): { status: string } {
    return { status: 'ok' };
  }
}

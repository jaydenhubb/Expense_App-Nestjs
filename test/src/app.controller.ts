import {
  Controller,
  Get,
  Put,
  Post,
  Delete,
  Param,
  Body,
  HttpCode,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('report/:type')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getReports(@Param('type') type: string) {
    return this.appService.getReports(type);
  }
  @Get(':id')
  getReport(@Param('type') type: string, @Param('id') id: string) {
    return this.appService.getReport(type, id);
  }
  @Post()
  addReport(
    @Body() { amount, source }: { amount: number; source: string },
    @Param('type') type: string,
  ) {
    return this.appService.addReport(type, amount, source);
  }
  @Put(':id')
  updateReport(
    @Param('type') type: string,
    @Param('id') id: string,
    @Body() body: { amount: number; source: string },
  ) {
    return this.appService.updateReport(type, id, body);
  }
  @HttpCode(204)
  @Delete(':id')
  deleteReport(@Param('id') id: string) {
    return this.appService.deleteReport(id);
  }
}

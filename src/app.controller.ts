import {
  Controller,
  Get,
  Put,
  Post,
  Delete,
  Param,
  HttpCode,
  Body,
  ParseUUIDPipe,
  ParseEnumPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ReportType } from './data';
import {
  CreateReportDto,
  ReportResponseDto,
  UpdateReportDto,
} from './dtos/reort.dto';

@Controller('report/:type')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getReports(
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
  ): ReportResponseDto[] {
    return this.appService.getReports(type);
  }
  @Get(':id')
  getReport(
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
    @Param('id', ParseUUIDPipe) id: string,
  ): ReportResponseDto {
    return this.appService.getReport(type, id);
  }
  @Post()
  addReport(
    @Body() body: CreateReportDto,
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
  ): ReportResponseDto {
    return this.appService.addReport(type, body);
  }
  @Put(':id')
  updateReport(
    @Param('type', new ParseEnumPipe(ReportType)) type: string,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: UpdateReportDto,
  ): ReportResponseDto {
    return this.appService.updateReport(type, id, body);
  }
  @HttpCode(204)
  @Delete(':id')
  deleteReport(@Param('id', ParseUUIDPipe) id: string) {
    return this.appService.deleteReport(id);
  }
}

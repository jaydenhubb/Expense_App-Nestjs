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
import { ReportsService } from './reports.service';
import { ReportType } from '../data';
import {
  CreateReportDto,
  ReportResponseDto,
  UpdateReportDto,
} from '../dtos/reort.dto';

@Controller('reports/:type')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get()
  getReports(
    @Param('type', new ParseEnumPipe(ReportType)) type: ReportType,
  ): ReportResponseDto[] {
    return this.reportsService.getReports(type);
  }
  @Get(':id')
  getReport(
    @Param('type', new ParseEnumPipe(ReportType)) type: ReportType,
    @Param('id', ParseUUIDPipe) id: string,
  ): ReportResponseDto {
    return this.reportsService.getReport(type, id);
  }
  @Post()
  addReport(
    @Body() body: CreateReportDto,
    @Param('type', new ParseEnumPipe(ReportType)) type: ReportType,
  ): ReportResponseDto {
    return this.reportsService.addReport(type, body);
  }
  @Put(':id')
  updateReport(
    @Param('type', new ParseEnumPipe(ReportType)) type: ReportType,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: UpdateReportDto,
  ): ReportResponseDto {
    return this.reportsService.updateReport(type, id, body);
  }
  @HttpCode(204)
  @Delete(':id')
  deleteReport(@Param('id', ParseUUIDPipe) id: string) {
    return this.reportsService.deleteReport(id);
  }
}

// @Controller('reports')
// export class ReportsController {}

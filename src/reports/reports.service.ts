import { Injectable } from '@nestjs/common';
import { data, ReportType } from 'src/data';
import { v4 as uuid } from 'uuid';
import { CreateReportDto, ReportResponseDto } from '../dtos/reort.dto';

interface UpdateReport {
  amount?: number;
  source?: string;
}

@Injectable()
export class ReportsService {
  getReports(type: ReportType): ReportResponseDto[] {
    return data.report
      .filter((report) => report.type === type)
      .map((report): ReportResponseDto => new ReportResponseDto(report));
  }
  getReport(type: ReportType, id: string): ReportResponseDto {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    const report = data.report
      .filter((report) => report.type === reportType)
      .find((report) => report.id === id);
    if (!report) return;
    return new ReportResponseDto(report);
  }
  addReport(type: ReportType, body: CreateReportDto): ReportResponseDto {
    const { amount, source } = body;
    const newReport = {
      id: uuid(),
      amount,
      source,
      created_at: new Date(),
      updated_at: new Date(),
      type: type === 'income' ? ReportType.INCOME : ReportType.EXPENSE,
    };
    data.report.push(newReport);
    return new ReportResponseDto(newReport);
  }
  updateReport(
    type: ReportType,
    id: string,
    body: UpdateReport,
  ): ReportResponseDto {
    const reportType =
      type === 'income' ? ReportType.INCOME : ReportType.EXPENSE;
    const reportToUpdate = data.report
      .filter((report) => report.type === reportType)
      .find((report) => report.id === id);
    if (!reportToUpdate) return;
    const reportIndex = data.report.findIndex(
      (report) => report.id === reportToUpdate.id,
    );
    data.report[reportIndex] = {
      ...data.report[reportIndex],
      ...body,
    };
    return new ReportResponseDto(data.report[reportIndex]);
  }
  deleteReport(id: string): string {
    const reportIndex = data.report.findIndex((report) => report.id === id);
    if (reportIndex === -1) return;
    data.report.splice(reportIndex, 1);
    return;
  }
}

// @Injectable()
// export class ReportsService {}

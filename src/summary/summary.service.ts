import { Injectable } from '@nestjs/common';
import { ReportType } from 'src/data';
import { ReportsService } from 'src/reports/reports.service';

@Injectable()
export class SummaryService {
  constructor(private readonly reportsService: ReportsService) {}
  calculateSummary() {
    const totalExpenses = this.reportsService
      .getReports(ReportType.EXPENSE)
      .reduce((sum, report) => sum + report.amount, 0);
    const totalIncome = this.reportsService
      .getReports(ReportType.INCOME)
      .reduce((sum, report) => sum + report.amount, 0);
    return {
      totalIncome,
      totalExpenses,
      netIncome: totalIncome - totalExpenses,
    };
  }
}

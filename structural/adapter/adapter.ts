interface IJsonReporter {
  collectData(): boolean;
  getReport(): string;
}

class ClientReportService {
  constructor(private reporter: IJsonReporter) {
  }

  collect(): boolean {
    console.log(`Collecting data from json ${Object.getPrototypeOf(this.reporter).constructor.name} reporter...`);
    return this.reporter.collectData();
  }

  getResult(): string {
    console.log('Generating report from client service...');
    return this.reporter.getReport()
  }
}

interface IXMLReporter {
  gatherData(): string;
  makeReport(): Array<string>;
}

class XMLReporter {
  gatherData(): string {
    console.log('Collecting data from xml reporter...');
    return 'Data gathered'
  }

  makeReport(): Array<string> {
    console.log('Generating xml report...');
    return ['Some report', 'Report data'];
  }
}

class XMLReportAdapter implements IJsonReporter {
  constructor(private reporterToAdapt: IXMLReporter) {
  }

  collectData(): boolean {
    return !!this.reporterToAdapt.gatherData()
  }

  getReport(): string {
    return this.reporterToAdapt.makeReport().join(':');
  }
}

function adaptIt() {
  const xmlReporter = new XMLReporter();
  // const clientReportService = new ClientReportService(xmlReporter); // error
  const xmlReportAdapter = new XMLReportAdapter(xmlReporter);
  const clientReportService = new ClientReportService(xmlReportAdapter);
  clientReportService.collect();
  const report = clientReportService.getResult();
  console.log(report);
}
// adaptIt();
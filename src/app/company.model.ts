export class company
{
    id: number;
  name: string;
  ticker: string;
  exchange: string;
  isin: string;
  website?: string;  

  constructor(id: number, name: string, ticker: string, exchange: string, isin : string, website? : string)
  {
    this.id = id;
    this.name = name;
    this.ticker = ticker;
    this.exchange = exchange;
    this.isin = isin;
    this.website = website;
  }
} 

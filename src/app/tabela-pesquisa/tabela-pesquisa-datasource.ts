// TODO: Replace this with your own data model type
export interface TabelaPesquisaItem {
  nome: string;
  documento: number;
  email: string;
}

// TODO: replace this with real data from your application
export const EXAMPLE_DATA: TabelaPesquisaItem[] = [
  {documento: 91868912000, nome: 'Ellas', email: 'koipul@email.com'},
  {documento: 33591779083, nome: 'Premhuo', email: 'wiwaer@email.com'},
  {documento: 98690771026, nome: 'Urzyo', email: 'waousn@email.com'},
  {documento: 63269808011, nome: 'Doikatoi', email: 'zyecli@email.com'},
  {documento: 17982385001, nome: 'Xiwibor', email: 'beuger@email.com'},
  {documento: 25428871016, nome: 'Lezos', email: 'enflol@email.com'},
  {documento: 50199382034, nome: 'Sasiam', email: 'ficugo@email.com'},
  {documento: 92643327071, nome: 'Uragkaouma', email: 'wauwur@email.com'},
  {documento: 93551216010, nome: 'Urnou', email: 'devivu@email.com'},
  {documento: 56842208009, nome: 'Fosue', email: 'zufaca@email.com'},
];

export const FILTERED_DATA: TabelaPesquisaItem[] = [
  {documento: 25428871016, nome: 'Lezos', email: 'enflol@email.com'},
  {documento: 50199382034, nome: 'Sasiam', email: 'ficugo@email.com'},
  {documento: 92643327071, nome: 'Uragkaouma', email: 'wauwur@email.com'},
  {documento: 93551216010, nome: 'Urnou', email: 'devivu@email.com'},
  {documento: 56842208009, nome: 'Fosue', email: 'zufaca@email.com'},
];

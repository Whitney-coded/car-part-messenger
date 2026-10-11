import { describe, expect, it } from 'vitest';
import { whatsappLink, makes, provinces, conditions } from './part-request';
describe('PartLink requests', () => {
 it('opens the placeholder South African business number', () => {
  expect(new URL(whatsappLink({make:'Toyota',model:'Hilux',year:'2018',part:'Bonnet',condition:'Used / Scrap Yard',province:'Gauteng'})).pathname).toBe('/27821234567');
 });
 it('encodes the exact requested message and trims inputs', () => {
  const url = new URL(whatsappLink({make:'Toyota',model:' Hilux ',year:'2018',part:' Bonnet ',condition:'Used / Scrap Yard',province:'Gauteng'}));
  expect(url.searchParams.get('text')).toBe('Hi PartLink SA, I am looking for a Used / Scrap Yard Bonnet for a 2018 Toyota Hilux. I am located in Gauteng.');
 });
 it('offers the requested vehicle makes', () => { expect(makes).toEqual(['Toyota','VW','Ford','Nissan','BMW','Hyundai','Isuzu','Suzuki','Mercedes']); });
 it('offers all nine South African provinces', () => { expect(provinces).toEqual(['Eastern Cape','Free State','Gauteng','KwaZulu-Natal','Limpopo','Mpumalanga','North West','Northern Cape','Western Cape']); });
 it('offers the three requested conditions', () => { expect(conditions).toEqual(['Used / Scrap Yard','Aftermarket New','Any']); });
});

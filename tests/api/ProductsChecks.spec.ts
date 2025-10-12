import {test,expect,request} from '@playwright/test';
import ApplicationUrl from 'helpers/ApplicationUrl.js';
import {ApiResponse} from 'helpers/ProductsData.js';

test('test', async ({ request }) => {

    const response = await request.get(`${ApplicationUrl.API_BASE_URL}products?brand=awara`);
    expect(response.ok).toBeTruthy();
    const body:ApiResponse = await response.json();
    
    expect(body.result.total_count).toBeGreaterThan(0);
    expect(body.result.data.length).toBeGreaterThan(0);
});

test('test2', async ({ request }) => {

    const response = await request.get(`${ApplicationUrl.API_BASE_URL}products?name=the-awara-hybrid-mattress-30&lang=en&brand=awara`);
    expect(response.ok).toBeTruthy();

    const body:ApiResponse = await response.json();    
    expect(body.result.total_count).toBe(1);
    expect(body.result.data.length).toBe(1);
});
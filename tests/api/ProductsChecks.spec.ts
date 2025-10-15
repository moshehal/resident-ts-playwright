import {test,expect,request} from '@playwright/test';
import ApplicationUrl from 'helpers/ApplicationUrl.js';
import {ApiResponse} from 'helpers/ProductsData.js';

test('Awara should have at least one product', async ({ request }) => {

    const response = await request.get(`${ApplicationUrl.API_BASE_URL}products?brand=awara`);
    expect(response.ok(), "The response should be OK").toBeTruthy();
    const body:ApiResponse = await response.json();
    
    expect(body.result.total_count, `Total count: ${body.result.total_count}, is greater than 0`).toBeGreaterThan(0);
    expect(body.result.data.length, `The amount of products: ${body.result.data.length}, is greater than 0`).toBeGreaterThan(0);
});

test('Awara should have only one product with a unique name', async ({ request }) => {

    const response = await request.get(`${ApplicationUrl.API_BASE_URL}products?name=the-awara-hybrid-mattress-30&lang=en&brand=awara`);
    expect(response.ok(), "The response should be OK").toBeTruthy();

    const body:ApiResponse = await response.json();    
    expect(body.result.total_count, `Total count: ${body.result.total_count}, is equals to 1`).toBe(1);
    expect(body.result.data.length, `The amount of products: ${body.result.data.length}, is equals to 1`).toBe(1);
});
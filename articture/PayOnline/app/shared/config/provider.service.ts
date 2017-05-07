import { Injectable } from '@angular/core';


@Injectable()

export class ProviderService
{
    constructor() { }
    getBaseAddress()
    {
        return 'http://localhost:49707/api'
    }
    getTokenBaseAddress()
    {
        return 'http://localhost:49707/token'
    }
}
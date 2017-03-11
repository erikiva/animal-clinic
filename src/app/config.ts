import { OpaqueToken } from '@angular/core';

// El valor que importa
export const API_CONFIG_VALUE = {
    uri: 'http://localhost:3000',
    path: '/api'
};

// Lo que vamos a importar es como un alias
export const API_CONFIG = new OpaqueToken('API_CONFIG');


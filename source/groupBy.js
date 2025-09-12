'use strict';

/**
 * Функция, которая принимает на вход массив объектов и строку, представляющую ключ, по которому нужно сгруппировать объекты.
 * @param {Array<Object>} data - массив объектов для группировки
 * @param {string} key - ключ объекта, по которому производится группировка
 * 
 * @example
 * const data = [
 *     { id: 1, category: 'fruit', name: 'apple' },
 *     { id: 2, category: 'fruit', name: 'banana' },
 *     { id: 3, category: 'vegetable', name: 'carrot' },
 *     { id: 4, category: 'fruit', name: 'orange' },
 *     { id: 5, category: 'vegetable', name: 'lettuce' }
 * ];
 * 
 * groupBy(data, 'category');
 * // result: 
 * {
 *     fruit: [
 *         { id: 1, category: 'fruit', name: 'apple' },
 *         { id: 2, category: 'fruit', name: 'banana' },
 *         { id: 4, category: 'fruit', name: 'orange' }
 *     ],
 *     vegetable: [
 *         { id: 3, category: 'vegetable', name: 'carrot' },
 *         { id: 5, category: 'vegetable', name: 'lettuce' }
 *     ]
 * }
 *           
 * @returns {Object} объект сгруппированных данных по указанному ключу
 * @throws {Error} если входные данные невалидны
 */
const groupBy = (data, key) => {
    if (!Array.isArray(data)) {
        throw new Error('Первый аргумент должен быть массивом');
    }
    
    if (typeof key !== 'string' || key.trim() === '') {
        throw new Error('Второй аргумент должен быть непустой строкой');
    }
    
    return data.reduce((acc, item) => {
        if (typeof item !== 'object' || item === null) {
            console.warn('Элемент не является объектом и будет пропущен:', item);
            return acc;
        }
        
        if (!Object.prototype.hasOwnProperty.call(item, key)) {
            console.warn('Объект не содержит ключ');
            return acc;
        }
        
        const groupKey = item[key];
        
        if (groupKey === null || groupKey === undefined) {
            console.warn('Значение ключа равно null/undefined');
            return acc;
        }
        
        acc[groupKey] = acc[groupKey] || [];
        acc[groupKey].push(item);
        
        return acc;
    }, {});
};
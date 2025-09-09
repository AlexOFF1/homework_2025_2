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
 */
const groupBy = (data, key) => {
    return data.reduce((acc, item) => {
        const groupKey = item[key];
        
        acc[groupKey] = acc[groupKey] || [];
        
        acc[groupKey].push(item);
        
        return acc;
    }, {});
};
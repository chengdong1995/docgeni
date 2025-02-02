import { CategoryItem } from './navigation-item';

/**
 * 包含内部属性的定义
 */
export interface Library extends DocgeniLibrary {
    categories?: CategoryItem[];
}

/**
 * 用户可以配置的 Library 属性
 */
export interface DocgeniLibrary {
    name: string;
    abbrName?: string;
    rootDir: string;
    categories?: {
        id?: string;
        title: string;
        locales?: {
            [key: string]: {
                title: string;
            };
        };
    }[];
    include?: string | string[];
    exclude?: string | string[];
    docDir?: string;
    apiDir?: string;
    examplesDir?: string;
    labels?: { [id: string]: { text: string; color: string } } | { id: string; text: string; color: string }[];
}

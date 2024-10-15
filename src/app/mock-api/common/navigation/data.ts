/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example',
    },
    {
        id: 'assets',
        title: 'Assets',
        type: 'group',
        icon: 'heroicons_outline:chart-pie',
        children: [
            {
                id: 'assets.equipments',
                title: 'Assets',
                type: 'collapsable',
                icon: 'heroicons_outline:desktop-computer',
                children: [
                    {
                        id: 'assets.equitpments.inventory',
                        title: 'Inventory',
                        type: 'basic',
                        icon    : 'heroicons_outline:collection',
                        link: '/assets/inventory',
                    },
                    {
                        id: 'assets.equitpments.inventory',
                        title: 'Import Inventory',
                        type: 'basic',
                        icon    : 'feather:download',
                        link: '/assets/import-assets',
                    },
                ],
            },
        ],
    },
    {
        id: 'requests',
        title: 'Requests',
        type: 'group',
        icon: 'heroicons_outline:chart-pie',
        children: [
            {
                id: 'requests.data',
                title: 'Data',
                type: 'collapsable',
                icon: 'heroicons_outline:desktop-computer',
                children: [
                    {
                        id: 'apps.ecommerce.inventory',
                        title: 'Movement',
                        type: 'basic',
                        icon    : 'feather:navigation',
                        link: '/requests/movement',
                    },
                ],
            },
        ],
    },
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example',
    },
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example',
    },
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id: 'example',
        title: 'Example',
        type: 'basic',
        icon: 'heroicons_outline:chart-pie',
        link: '/example',
    },
];

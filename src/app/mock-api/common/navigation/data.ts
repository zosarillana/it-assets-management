/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id: 'dashboard',
        title: 'Dashboard',
        subtitle: 'Dashboard and analytics',
        type: 'group',
        icon: 'heroicons_outline:chart-pie',
        children: [
            {
                id: 'dashboard',
                title: 'Analytics',
                type: 'basic',
                icon: 'heroicons_outline:chart-pie',
                link: '/dashboard',
            },
        ],
    },
    {
        id: 'assets',
        title: 'Assets Details',
        subtitle: 'Asset inventory and details',
        type: 'group',
        icon: 'heroicons_outline:chart-pie',
        children: [
            {
                id: 'assets.equipments',
                title: 'Assets Profile',
                type: 'collapsable',
                icon: 'heroicons_outline:desktop-computer',
                children: [
                    {
                        id: 'assets.equitpments.inventory',
                        title: 'Inventory Cards',
                        type: 'basic',
                        icon: 'heroicons_outline:collection',
                        link: '/assets/inventory',
                    },
                    {
                        id: 'assets.equitpments.inventory',
                        title: 'Import Inventory',
                        type: 'basic',
                        icon: 'feather:download',
                        link: '/assets/import-assets',
                    },
                ],
            },
            {
                id: 'assets.tables',
                title: 'Asset Details',
                type: 'collapsable',
                icon: 'feather:tag',
                children: [
                    {
                        id: 'assets.cards.user',
                        title: 'Cards Details',
                        type: 'collapsable',
                        icon: 'mat_outline:article',         
                        children:[
                            {
                                id: 'assets.tables.pc',
                                title: 'User Card',
                                type: 'basic',
                                 icon: 'feather:user',
                                link: '/assets/cards/user',
                            },
                            {
                                id: 'assets.tables.pc',
                                title: 'Desktop Card',
                                type: 'basic',
                                 icon: 'feather:monitor',
                                link: '/assets/cards/pc',
                            },
                        ]             
                    },
                    {
                        id: 'assets.tables.pc',
                        title: 'PC Specs',
                        type: 'basic',
                        icon: 'feather:monitor',
                        link: '/assets/pc',
                    },
                    {
                        id: 'assets.equitpments.inventory',
                        title: 'Peripherals ',
                        type: 'basic',
                        icon: 'mat_outline:devices_other',
                        link: '/assets/peripherals',
                    },
                ],
            },
        ],
    },
    {
        id: 'data',
        title: 'Data Table',
        subtitle: 'Requests and approvals',
        type: 'group',
        icon: 'heroicons_outline:chart-pie',
        children: [
            {
                id: 'data.asset',
                title: 'Asset Movement',
                type: 'collapsable',
                icon: 'heroicons_outline:desktop-computer',
                children: [
                    {
                        id: 'data.asset.table',
                        title: 'Movement',
                        type: 'basic',
                        icon: 'feather:tag',
                        link: '/data/movement',
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

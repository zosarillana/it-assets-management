export class CardPcs {
    id?: number;
    firstName = '';
    lastName = '';
    emp_id = '';
    contact_no = '';
    dept_no = '';
    company_name = '';
    location = '';
    date_assigned = '';
    pc_id: string[] = [];
    peripheral_id: string[] = [];
    date_created = '';
    date_updated = '';
    pcs: Array<{
        pcs_id: number;
        asset_barcode: number;
        date_acquired : string;
        pc_type: string;
        brand: string;
        model: string;
        processor: string;
        ram: string;
        storage_capacity : string;
        storage_type: string;
        graphics : string;
        size : string;
        li_description  : string;
        serial_no  : string;
        date_created   : string;
        date_updated  : string;
    }> = [];
    peripherals: Array<{
        peripherals_id: number;
        date_acquired : number;
        asset_barcode : string;
        peripheral_type: string;
        brand: string;
        model: string;
        color: string;
        size : string;
        li_description  : string;
        serial_no  : string;
        date_created   : string;
        date_updated  : string;
    }> = [];  
}
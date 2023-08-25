import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent{

  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Women Ethnic',
                items: [
                    {
                        label: 'New',
                        items: [
                            {
                                label: 'Sarees',
                            },
                            {
                                label: 'Kurtis',
                            },
                            {
                              label: 'Suits & Dress Material',
                          },
                          {
                              label: 'Bottomwear',
                          },
                          {
                            label: 'Innerwear',
                        },
                        {
                            label: 'Sleepwear',
                        }
                        ]
                    },
                    {
                        label: 'Women Western',
                        items:[
                          {
                            label: 'Tops',
                        },
                        {
                          label: 'Jumpsuites',
                      },
                      {
                          label: 'Jeans',
                      },
                      {
                        label: 'Shorts',
                    },
                    {
                        label: 'Innerwear',
                    }
                        ]
                    }                    
                ]
            },
            {
                label: 'Men',
                items: [
                    {
                        label: 'Left',
                        icon: 'pi pi-fw pi-align-left'
                    },
                    {
                        label: 'Right',
                        icon: 'pi pi-fw pi-align-right'
                    },
                    {
                        label: 'Center',
                        icon: 'pi pi-fw pi-align-center'
                    },
                    {
                        label: 'Justify',
                        icon: 'pi pi-fw pi-align-justify'
                    }
                ]
            },
            {
                label: 'Kids',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-user-plus'
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-user-minus'
                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-fw pi-users',
                        items: [
                            {
                                label: 'Filter',
                                icon: 'pi pi-fw pi-filter',
                                items: [
                                    {
                                        label: 'Print',
                                        icon: 'pi pi-fw pi-print'
                                    }
                                ]
                            },
                            {
                                icon: 'pi pi-fw pi-bars',
                                label: 'List'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Home & Kitchen',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            {
                                label: 'Save',
                                icon: 'pi pi-fw pi-calendar-plus'
                            },
                            {
                                label: 'Delete',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    },
                    {
                        label: 'Archieve',
                        icon: 'pi pi-fw pi-calendar-times',
                        items: [
                            {
                                label: 'Remove',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Beauty & Health',
            },
            {
              label: 'Jewellery & Accessories',
          },
          {
            label: 'Bags & Footwear',
        },
        {
          label: 'Electronics',
      },
        ];
    }
}

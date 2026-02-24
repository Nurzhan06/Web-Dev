import { Component } from '@angular/core';
import {Product} from '../product.model'

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products: Product[] = [
    {
      id: 1001,
      name: "Зимняя куртка Tommy Hilfiger темно-синий",
      description: "Зимняя куртка Tommy Hilfiger 17978974 — это идеальный выбор для тех, кто ценит комфорт и стиль в холодное время года.",
      price: 90000,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/pe6/p49/3700194.jpeg?format=gallery-large",
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pe6/p49/3700194.jpeg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p50/p4d/3700195.jpeg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pb9/p50/3700196.jpeg?format=gallery-large'
      ],
      link: "https://kaspi.kz/shop/p/zimnjaja-kurtka-tommy-hilfiger-17978974-temno-sinii-l-128665356/?c=750000000"
    },
    {
      id: 1002,
      name: "Зимняя куртка Tommy Hilfiger черный",
      description: "Зимняя куртка Tommy Hilfiger 17978974 — это идеальный выбор для тех, кто ценит комфорт и стиль в холодное время года.",
      price: 87500,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p1c/p8d/3700173.jpeg?format=gallery-large",
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p1c/p8d/3700173.jpeg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pb2/p89/3700174.jpeg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p48/p86/3700175.jpeg?format=gallery-large'
      ],
      link: "https://kaspi.kz/shop/p/zimnjaja-kurtka-tommy-hilfiger-17978974-chernyi-l-128665351/?c=750000000&hasVariants=true"
    },
    {
      id: 1003,
      name: "Ветровка Tommy Hilfiger синий",
      description: "Ветровка Tommy Hilfiger 78J8297-FAP — это идеальный выбор для тех, кто ценит комфорт и стиль в любую погоду.",
      price: 50000,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p28/pf9/21469387.jpeg?format=gallery-large",
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p28/pf9/21469387.jpeg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p92/pfc/21469388.jpeg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pfc/pff/21469389.jpeg?format=gallery-large'
      ],
      link: "https://kaspi.kz/shop/p/vetrovka-tommy-hilfiger-78j8297-fap-chernyi-l-133774168/?c=750000000"
    },
    {
      id: 1004,
      name: "Футболка Calvin Klein серебристый",
      description: "Футболка Calvin Klein — основной элемент вашего гардероба, который сочетает в себе современный стиль и непревзойденный комфорт. Эта модель идеально подходит для создания повседневных образов, подчеркивая вашу индивидуальность.",
      price: 20000,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hf8/hc9/85923288383518.jpg?format=gallery-large",
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf8/hc9/85923288383518.jpg?format=gallery-large'
      ],
      link: "https://kaspi.kz/shop/p/futbolka-calvin-klein-logotip-40qp894-serebristyi-s-119031624/?c=750000000"
    },
    {
      id: 1005,
      name: "Футболка Tommy Hilfiger Логотип компании Tommy Hilfiger темно-синий",
      description: "Футболка Tommy Hilfiger — основной элемент вашего гардероба, который сочетает в себе классический стиль и современные тенденции. Эта модель идеально подходит для создания повседневных образов и станет вашим верным спутником в любой ситуации.",
      price: 21000,
      rating: 4,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p05/pb4/27990778.jpeg?format=gallery-large",
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p05/pb4/27990778.jpeg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p9b/pb0/27990779.jpeg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p86/p65/27990780.jpeg?format=gallery-large'
      ],
      link: "https://kaspi.kz/shop/p/futbolka-tommy-hilfiger-logotip-kompanii-tommy-hilfiger-78ja560-587-temno-sinii-l-135679352/?c=750000000"
    },
    {
      id: 1006,
      name: "Кроссовки Timberland Motion Access Low Lace-Up Sneaker серебристый, серый",
      description: "Timberland Motion Access Low Lace-Up Sneaker — стильные и удобные кроссовки для активного повседневного использования. Модель сочетает в себе прочность, комфорт и современный дизайн.",
      price: 44900,
      rating: 4.5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p8a/pb8/72267310.jpeg?format=gallery-large",
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p8a/pb8/72267310.jpeg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p9b/pc9/72267315.jpeg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pd8/pd3/72267318.jpeg?format=gallery-large'
      ],
      link: "https://kaspi.kz/shop/p/krossovki-timberland-motion-access-low-lace-up-sneaker-tboa6djk-ex1-serebristyi-seryi-40-147909137/?c=750000000"
    },
    {
      id: 1007,
      name: "Футболка Timberland Футболка \"Astana\" белый",
      description: "Мужская футболка Timberland — это стильная модель из натурального материала.",
      price: 10500,
      rating: 4.5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h7f/hf7/86280753774622.jpg?format=gallery-large",
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h7f/hf7/86280753774622.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h56/h32/86280753840158.jpg?format=gallery-large'
      ],
      link: "https://kaspi.kz/shop/p/futbolka-timberland-futbolka-34-astana-34-b0a6e5d100-belyi-xl-120416165/?c=750000000"
    },
    {
      id: 1008,
      name: "Парка Timberland голубой",
      description: "Защитите себя от непогоды в этой удобной парке. Она изготовлена из качественных материалов, включая 100% полиэстер. Она выполнен из искусственного меха и имеет водонепроницаемую технологию Tier 2 с герметичными швами.",
      price: 131000,
      rating: 0,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p72/pf3/3091981.jpg?format=gallery-large",
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p72/pf3/3091981.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p56/pf3/3091982.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p3a/pf3/3091983.jpg?format=gallery-large'
      ],
      link: "https://kaspi.kz/shop/p/parka-timberland-tb0a6rxd073-goluboi-xxl-128508192/?c=750000000"
    },
    {
      id: 1009,
      name: "Джинсы прямые Timberland синий",
      description: "Эти джинсы прямого кроя Squam Lake из денима слегка растягиваются, обеспечивая комфорт в течение всего дня и отличную посадку.",
      price: 59990,
      rating: 5,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p49/p88/34929136.jpg?format=gallery-large",
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p49/p88/34929136.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p11/p88/34929138.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p6d/p85/34929141.jpg?format=gallery-large'
      ],
      link: "https://kaspi.kz/shop/p/dzhinsy-prjamye-timberland-th22992-sinii-w29-137626907/?c=750000000"
    },
    {
      id: 1010,
      name: "Рубашка Timberland белый",
      description: "Носите женскую рубашку Poplin Shirt навыпуск или поудобнее, в зависимости от случая. Она сделана из 100% органического хлопка, имеет свободный крой и удобные накладные карманы.",
      price: 50990,
      rating: 0,
      image: "https://resources.cdn-kaspi.kz/img/m/p/pa5/p43/29221835.jpg?format=gallery-large",
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pa5/p43/29221835.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pc2/p43/29221836.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pde/p43/29221837.jpg?format=gallery-large'
      ],
      link: "https://kaspi.kz/shop/p/rubashka-timberland-tb0a67nu100-belyi-xs-136042072/?c=750000000"
    }
  ];

  selectedImages: { [id: number]: string } = {};

  getMainImage(product: Product): string {
    return this.selectedImages[product.id] || product.image;
  }

  selectImage(product: Product, image: string): void {
    this.selectedImages[product.id] = image;
  }

  share(product: Product) {
    const encodedUrl = encodeURIComponent(product.link);
    const encodedName = encodeURIComponent(product.name);
    const url = `https://t.me/share/url?url=${encodedUrl}&text=${encodedName}`;
    window.open(url, '_blank');
  }
}

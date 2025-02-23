import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';

interface Product {
  name: string;
  likes: number;
  image: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, FormsModule, ProductListComponent]
})
export class AppComponent {
  categories: string[] = ['Обувь', 'Одежда', 'Экипировка', 'Аксессуары'];
  selectedCategory: string | null = null;
  productsMap: Map<string, Product[]> = new Map([
    ['Обувь', [
      { name: 'Кроссовки Mizuno Wave rider', likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/pbe/p61/6114184.jpeg?format=gallery-medium', description: 'Mizuno - японский спортивный бренд, с более чем столетней историей. Модель Wave Rider ß, последняя новинка в коллекции SPS, является данью уважения ТРАДИЦИЯМ и ИННОВАЦИЯМ. Обувь, берущая свое начало в долгой и богатой истории линейки Rider, отражает ДНК Mizuno в премиальном исполнении с качественной отделкой. ', link: 'https://kaspi.kz/shop/p/krossovki-mizuno-wave-rider-wave-rider-belyi-temno-sinii-43-129350048/?c=750000000' },
      { name: 'Кроссовки Mizuno WAVE LIGHTNING Z8', likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/pbf/pcb/16364130.png?format=gallery-medium', description: 'Играйте на вершине своей игры с этой удобной обувью, оснащенной функциями, адаптированными для волейбола. Наслаждайтесь мягкой амортизацией и высокой отдачей энергии с MIZUNO ENERZY NEXT и SOCKLINER в передней части стопы, а также промежуточной подошвой MIZUNO ENERZY. ', link: 'https://kaspi.kz/shop/p/krossovki-mizuno-wave-lightning-z8-2417-sinii-40-132333083/?c=750000000' },
      { name: 'Кроссовки Mizuno красный, оранжевый', likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/p70/p6b/14454179.jpeg?format=gallery-medium', description: 'Эта обувь — отличный вариант для бегунов начального уровня, которые ищут технологию MIZUNO WAVE и другие функции по конкурентоспособной цене. MIZUNO WAVE предлагает невероятную амортизацию и устойчивость, а WAVE PLATE обеспечивает плавную тягу.', link: 'https://kaspi.kz/shop/p/krossovki-mizuno-wave-prodigy-4-krasnyi-oranzhevyi-41-131792971/?c=750000000' },
      { name: 'Кроссовки Mizuno красный', likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/pea/p66/13963614.jpeg?format=gallery-medium', description: 'Wave Dimension - это новейшая техническая разработка Mizuномер Эта обувь предназначена для стабильности и комфорта. Он создан по образцу WAVE MOMENTUM', link: 'https://kaspi.kz/shop/p/krossovki-mizuno-wave-dimension-red-krasnyi-40-5-131653972/?c=750000000' },
      { name: 'Кроссовки Mizuno белый, фиолетовый', likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/p89/p7c/10016317.jpeg?format=gallery-medium', description: 'Волейбольные кроссовки Mizuno Thunder Blade Z - оптимальная модель для тех, кому нужны одновременно и комфорт, и легкость. Кроссовки были обновлены полностью, от верха до подошвы, по сравнению с предыдущей версией (Mizuno Thunder Blade 3).', link: 'https://kaspi.kz/shop/p/krossovki-mizuno-v1gc2370-belyi-fioletovyi-36-130525675/?c=750000000' }
    ]],
    ['Одежда', [
      { name: 'Футболка Macron Wyvern белый', likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/pe6/pbf/9207025.jpeg?format=gallery-medium', description: 'Спортивная футболка', link: 'https://kaspi.kz/shop/p/futbolka-macron-wyvern-belyi-48-130290225/?c=750000000' },
      { name: 'Футболка Macron Wyvern черный', likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/p09/pf1/9207194.jpeg?format=gallery-medium', description: 'Стильная футболка', link: 'https://kaspi.kz/shop/p/futbolka-macron-wyvern-chernyi-52-130290218/?c=750000000' },
      { name: 'Футболка Macron серый', likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/pe8/p0d/6262060.jpg?format=gallery-medium', description: 'Стильная футболка', link: 'https://kaspi.kz/shop/p/futbolka-macron-9026-seryi-xl-116886884/?c=750000000' },
      { name: 'Майка Macron черный', likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/p94/p5e/6261678.jpg?format=gallery-medium', description: 'Стильная майка', link: 'https://kaspi.kz/shop/p/maika-macron-9032-chernyi-s-116886896/?c=750000000' },
      { name: 'Спортивные шорты Macron черный', likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/h4a/h8b/86893317455902.jpg?format=gallery-medium', description: 'Топовая шорты', link: 'https://kaspi.kz/shop/p/sportivnye-shorty-macron-2060-chernyi-s-122699301/?c=750000000' }
    ]],
    ['Экипировка', [
      { name: 'Наколенник NACH114705 M', likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/h31/h8b/69203127369758.jpg?format=gallery-medium', description: 'Наколенники acisc', link: 'https://kaspi.kz/shop/p/nach114705-m-chernyi-108970512/?c=750000000' },
      { name: 'Наколенник Leomax ak0990 серый L', likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/ha0/h4a/86421384003614.png?format=gallery-medium', description: 'Наколенники серые', link: 'https://kaspi.kz/shop/p/leomax-ak0990-seryi-l-104613005/?c=750000000' },
      { name: 'Нарукавники черные', likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/p97/pad/11690213.jpg?format=gallery-medium', description: 'Топовые нарукавники для волейбола', link: 'https://kaspi.kz/shop/p/30300357-057049341-chernyi-universal-nyi-120333462/?c=750000000' },
      { name: 'Нарукавники белые', likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/paa/p49/23065461.jpeg?format=gallery-medium', description: 'Белые нарукавники для волейбола', link: 'https://kaspi.kz/shop/p/010101-belyi-universal-nyi-134199923/?c=750000000' },
      { name: 'Спортивные очки Daisy X7 черный', likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/he1/h29/64499793133598.jpg?format=gallery-medium', description: 'Эти очки очень популярны и универсальны.', link: 'https://kaspi.kz/shop/p/daisy-x7-chernyi-106089152/?c=750000000' }
    ]],
    ['Аксессуары', [
      { name: 'Мяч Mikasa V200W', likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/h86/hef/63852919095326.jpg?format=gallery-medium', description: 'Оригинал!!! ОДОБРЕНО FIVB', link: 'https://kaspi.kz/shop/p/mikasa-v200w-dlja-voleibola-5-d67-100134795/?c=750000000' },
      { name: 'Мяч для волейбола Mikasa V320W', likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/ha4/h0d/63894378872862.jpg?format=gallery-medium', description: 'Копия Мяч', link: 'https://kaspi.kz/shop/p/dlja-voleibola-mikasa-v320w-100336701/?c=750000000' },
      { name: 'Mizuno нейлон, полиэстер 30 л', likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/pcf/p53/6608715.jpg?format=gallery-medium', description: 'Вместительная спортивная сумка', link: 'https://kaspi.kz/shop/p/sumka-mizuno-30295012-130746697-neilon-poliester-30-l-129509570/?c=750000000' },
      { name: 'Сетка Для волейбола Vegastar 159357', likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/hce/67765428781086.jpg?format=gallery-medium', description: 'Сетка для игры в волейбол', link: 'https://kaspi.kz/shop/p/dlja-voleibola-vegastar-159357-chernyi-108391174/?c=750000000' },
      { name: 'Сетка Для волейбола Vegastar 66554', likes: 0, image: 'https://resources.cdn-kaspi.kz/img/m/p/h6d/hba/87039136563230.jpg?format=gallery-medium', description: 'Хорошая сетка волейбол', link: 'https://kaspi.kz/shop/p/dlja-voleibola-vegastar-66554-chernyi-123229938/?c=750000000' }
    ]]
  ]);

  get products(): Product[] {
    return this.selectedCategory ? this.productsMap.get(this.selectedCategory) ?? [] : [];
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  removeProduct(productName: string) {
    if (!this.selectedCategory) return;

    this.productsMap.set(
      this.selectedCategory,
      this.products.filter(p => p.name !== productName)
    );
  }

  likeProduct(productName: string) {
    if (!this.selectedCategory) return;

    this.productsMap.set(
      this.selectedCategory,
      this.products.map(p =>
        p.name === productName ? { ...p, likes: p.likes + 1 } : p
      )
    );
  }

  shareOnWhatsApp(link: string) {
    window.open(`https://wa.me/?text=${encodeURIComponent(link)}`, '_blank');
  }
}

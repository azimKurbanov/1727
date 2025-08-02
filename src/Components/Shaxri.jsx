import React from "react";

const cards = [
  {
    title: "Управление запасами",
    icon: "📦",
    description:
      "Сервис 1С-Товары позволяет рассчитать необходимое количество товаров на полках (уровень запасов), помогает организовать систему контроля за остатками товаров, а также вовремя и в нужном количестве закупать у поставщиков.",
  },
  {
    title: "Автозаказ товаров",
    icon: "🗓️",
    description:
      "Сервис 1С-Товары позволяет рассчитать прогноз спроса. Сервис работает с равномерным и редким спросом для разных видов товаров. Автоматически подбирает подходящий метод расчета и позволяет внести корректировки в выполняемые расчеты.",
  },
  {
    title: "Анализ магазина",
    icon: "📊",
    description:
      "Система контроля упущенных продаж позволяет увеличить выручку. Средний чек, минимальный чек, максимальный чек - это пример показателей, которые анализирует сервис 1С-Товары, а также предлагает ряд инструментов для управления ценой и торговой наценкой.",
  },
  {
    title: "Прогнозирование спроса",
    icon: "📈",
    description:
      "Сервис 1С-Товары позволяет рассчитать прогноз спроса. Сервис работает с равномерным и редким спросом для разных видов товаров. Автоматически подбирает подходящий метод расчета и позволяет внести корректировки в выполняемые расчеты.",
  },
  {
    title: "Управление поставками",
    icon: "🚚",
    description:
      "Сервис 1С-Товары позволяет рассчитать прогноз спроса. Сервис работает с равномерным и редким спросом для разных видов товаров. Автоматически подбирает подходящий метод расчета и позволяет внести корректировки в выполняемые расчеты.",
  },
  {
    title: "Управление ассортиментом",
    icon: "🛍️",
    description:
      "Сервис 1С-Товары позволяет определить ассортиментную матрицу. Быстро и просто принять решение о том какие товары вывести из ассортимента, а наличие каких увеличить на полках магазина. Сервис позволяет узнать необходимую информацию: динамику продаж и остатков, периоды дефицита, размер оптимального остатка.",
  },
  {
    title: "Управление продажами",
    icon: "💰",
    description:
      "Система контроля упущенных продаж позволяет увеличить выручку. Средний чек, минимальный чек, максимальный чек - это пример показателей, которые анализирует сервис 1С-Товары, а также предлагает ряд инструментов для управления ценой и торговой наценкой.",
  },
];

export default function ProductCards() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {cards.slice(0, 2).map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {cards.slice(2, 5).map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {cards.slice(5).map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>


      <div className="flex flex-col sm:flex-row justify-between items-center bg-green-50 border border-green-400 rounded-xl p-6 gap-4">
        <div className="text-green-700 font-medium text-center sm:text-left text-sm sm:text-base flex items-center gap-2">
          🎁 Подключи любой продукт на 1 месяц бесплатно и оцени наши преимущества
        </div>
        <button className="px-6 py-2 bg-green-500 text-white rounded-md text-sm font-semibold hover:bg-green-600 transition">
          Подключить сейчас
        </button>
      </div>
    </div>
  );
}

function Card({ card }) {
  return (
    <div className="p-5 bg-white border rounded-xl shadow-sm hover:shadow-md transition">
      <div className="text-3xl text-gray-600">{card.icon}</div>
      <h3 className="text-lg font-semibold mt-2">{card.title}</h3>
      <p className="text-sm text-gray-700 mt-1">{card.description}</p>
      <button className="mt-4 px-4 py-2 text-sm font-semibold text-white bg-green-500 rounded-md hover:bg-green-600 transition">
        Подробнее
      </button>
    </div>
  );
}

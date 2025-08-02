import { useState, useRef, useEffect } from "react";

const qaList = [
  {
    question: "С чего начать работу с 1С-Товары?",
    answer:
      "Начните с регистрации в системе и импорта каталога товаров. Проверьте настройки складов и категорий, затем синхронизируйте остатки. Рекомендуется настроить автоматические уведомления по низкому запасу.",
  },
  {
    question: "Как подключить 1С-Ритейл Чекер* и 1С-Товары?",
    answer:
      "Для этого подключите бесплатный новый тариф «1С-Ритейл Чекер». Каждую неделю на почту будет приходить письмо с рекомендациями: какие товары срочно купить, какие в избытке, и какие стоит пересчитать для точности учёта.",
  },
  {
    question: "Средний чек, о чем нам может рассказать?",
    answer:
      "Средний чек показывает среднюю сумму покупки. Это помогает понять, насколько эффективно продаются сопутствующие товары, и оценить поведение клиентов — стоит ли стимулировать дополнительные продажи или предлагать упаковочные решения.",
  },
  {
    question: "Сценарии автозаказа сервиса 1С-Товары",
    answer:
      "Автозаказ может основываться на: минимальных остатках, сезонных трендах, скорости реализации и среднем спросе. Настройка параметров позволяет автоматически формировать заказы по заранее заданным правилам.",
  },
  {
    question: "Как подключить 1С-Ритейл Чекер* и 1С-Товары? (повтор)",
    answer:
      "Убедитесь, что у вас активен подходящий тариф, затем в панели управления включите интеграцию. Проверьте права доступа и настройте периодичность сборки аналитики, чтобы получать своевременные отчёты.",
  },
  {
    question: "Методы и формулы расчета торговой наценки",
    answer:
      "Основная формула: Наценка = (Цена продажи - Себестоимость) / Себестоимость * 100%. Также можно использовать маржу по прибыли или рекомендованные диапазоны в зависимости от категории товара.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  useEffect(() => {
    contentRefs.current = contentRefs.current.slice(0, qaList.length);
  }, []);

  return (
    <div className="w-[900px] mx-auto p-4 space-y-3">
      <h2 className="text-xl font-semibold mb-2">Ответы на вопросы</h2>
      <div className="flex flex-col gap-2">
        {qaList.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={`${item.question}-${idx}`}
              className="bg-white rounded-[15px] shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggle(idx)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between px-6 py-4 text-left rounded-[15px] focus:outline-none focus-visible:ring focus-visible:ring-green-400 transition-colors duration-200"
              >
                <span className="flex-1">{item.question}</span>
                <span
                  className={`ml-4 transition-transform duration-200 flex items-center ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <svg
                    className={`w-5 h-5 transition-colors duration-200 ${
                      isOpen ? "text-green-600" : "text-gray-500"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              <div
                ref={(el) => (contentRefs.current[idx] = el)}
                className="px-6 pb-5 overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out"
                style={{
                  maxHeight: isOpen
                    ? contentRefs.current[idx]?.scrollHeight + 16 + "px"
                    : "0px",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <p className="text-gray-700 text-sm leading-relaxed">{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

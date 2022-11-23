/*
1. Добавьте публичное поле `counter` с начальным значением `0`
2. Добавьте публичное статическое поле `counterStatic` с начальным значением `0`
3. Добавьте публичный статический метод `PI`, возвращающий значение `Math.PI`
4. Добавьте публичный статический метод `ceil`, возвращающий число округленное в большую сторону
 */
export default class TestClass {
    public counter = 0;
    public static counterStatic = 0;

    public static PI() {
        return Math.PI;
    }

    public static ceil(a: number) {
        return Math.ceil(a);
    }
}

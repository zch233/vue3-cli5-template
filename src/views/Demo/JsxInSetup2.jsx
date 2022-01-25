import HelloWorld from '@src/components/HelloWorld.vue';

const Button = () => {
    const handleClick = props => {
        console.log(props);
        alert('hi');
    };
    return <button onClick={handleClick}>click me!</button>;
};

export default {
    name: 'JsxInSetup2',
    setup() {
        return () => (
            <div>
                <p>JSXInSetup2</p>
                <Button />
                <HelloWorld />
            </div>
        );
    },
};

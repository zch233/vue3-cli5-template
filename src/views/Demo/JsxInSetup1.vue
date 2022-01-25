<script>
export default {
    name: 'JsxInSetup1',
    setup(props) {
        const handleClick = () => {
            console.log(props);
            alert('hi');
        };
        return () => (
            <div>
                <p>JSXInSetup1</p>
                <button onClick={handleClick}>click me!</button>
            </div>
        );
    },
};
</script>

<style scoped lang="less">
.icon {
    width: 1em;
    height: 1em;
    overflow: hidden;
    vertical-align: -0.15em;
    fill: currentColor;
}
</style>

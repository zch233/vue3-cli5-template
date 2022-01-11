<script>
export default {
    name: 'Icon',
    props: {
        icon: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        return () => (
            <svg class='icon' aria-hidden='true'>
                <use xlink:href={`#icon-${props.icon}`} />
            </svg>
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

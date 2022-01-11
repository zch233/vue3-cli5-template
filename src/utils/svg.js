// 一次性引入全部组件
~(requireContext => requireContext.keys().map(requireContext))(require.context('@src/assets/svg', false, /\.svg$/));

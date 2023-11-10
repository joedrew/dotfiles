vim.keymap.set('n', '<leader>n', '<Cmd>Neotree reveal<CR>')

require("neo-tree").setup({
    window = {
        mappings = {
            ["<C-x>"] = "open_split",
            ["<C-v>"] = "open_vsplit"
        }
    }
})

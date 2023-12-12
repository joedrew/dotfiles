local lsp_zero = require("lsp-zero")
vim.lsp.set_log_level("info")

lsp_zero.on_attach(function(client, bufnr)
    -- see :help lsp-zero-keybindings
    -- to learn the available actions
    lsp_zero.default_keymaps({ buffer = bufnr })

    vim.keymap.set("n", "gr", "<cmd>FzfLua lsp_references<cr>", { buffer = bufnr })
end)

lsp_zero.set_sign_icons({
    error = "✘",
    warn = "▲",
    hint = "⚑",
    info = "»",
})

require("mason").setup({})
require("mason-lspconfig").setup({
    ensure_installed = { "eslint", "lua_ls", "bashls", "tsserver", "graphql", "pyright", "terraformls" },
    handlers = {
        lsp_zero.default_setup,
        tsserver = function()
            require("lspconfig").tsserver.setup({
                settings = {
                    completions = {
                        completeFunctionCalls = true,
                    },
                },
            })
        end,
    },
})

vim.api.nvim_create_autocmd("BufWritePre", {
    pattern = { "*.tsx", "*.ts" },
    callback = function()
        local params = {
            command = "_typescript.organizeImports",
            arguments = { vim.api.nvim_buf_get_name(0) },
            title = "",
        }
        vim.lsp.buf_request_sync(0, "workspace/executeCommand", params)
    end,
})

local cmp = require("cmp")
local cmp_action = require("lsp-zero").cmp_action()

cmp.setup({
    mapping = cmp.mapping.preset.insert({
        -- `Enter` key to confirm completion
        ["<CR>"] = cmp.mapping.confirm({ select = false }),

        -- Ctrl+Space to trigger completion menu
        ["<C-Space>"] = cmp.mapping.complete(),

        -- Navigate between snippet placeholder
        ["<C-f>"] = cmp_action.luasnip_jump_forward(),
        ["<C-b>"] = cmp_action.luasnip_jump_backward(),

        -- Scroll up and down in the completion documentation
        ["<C-u>"] = cmp.mapping.scroll_docs(-4),
        ["<C-d>"] = cmp.mapping.scroll_docs(4),

        ["<Tab>"] = cmp_action.luasnip_supertab(),
        ["<S-Tab>"] = cmp_action.luasnip_shift_supertab(),
    }),
    formatting = {
        fields = { "abbr", "kind", "menu" },
        format = require("lspkind").cmp_format({
            mode = "symbol", -- show only symbol annotations
            maxwidth = 50, -- prevent the popup from showing more than provided characters
            ellipsis_char = "...", -- when popup menu exceed maxwidth, the truncated part would show ellipsis_char instead
        }),
    },
    window = {
        completion = cmp.config.window.bordered(),
        documentation = cmp.config.window.bordered(),
    },
    snippet = {
        expand = function(args)
            require("luasnip").lsp_expand(args.body)
        end,
    },
    sources = {
        { name = "nvim_lsp" },
        { name = "luasnip", option = { show_autosnippets = false } },
    },
})

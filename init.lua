require "options"
require "lazy-config"
require "fzflua"
require "treesitter"
require "lspzero"

-- Set colorscheme
require("catppuccin").setup({
	flavour = "mocha",
})
vim.cmd.colorscheme "catppuccin"

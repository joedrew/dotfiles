local vim = vim

vim.g.mapleader = ","
vim.g.maplocalleader = ","

vim.opt.autowrite = true
vim.opt.nu = true
vim.opt.ru = true
vim.opt.autoindent = true
vim.opt.smartindent = true
vim.opt.showmode = true
vim.opt.showmatch = true
vim.opt.ruler = true
vim.opt.expandtab = true
vim.opt.hlsearch = true
vim.opt.incsearch = true
vim.opt.termguicolors = true
vim.opt.shiftwidth = 4
vim.opt.expandtab = true
vim.cmd([[
  match errorMsg /\s\+$/
]])

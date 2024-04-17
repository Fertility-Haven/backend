import { createQuote } from './create'
import { findAllQuotes } from './find'
import { removeQuote } from './remove'
import { updateQuote } from './update'

export const quotesController = {
  findAll: findAllQuotes,
  create: createQuote,
  remove: removeQuote,
  update: updateQuote
}

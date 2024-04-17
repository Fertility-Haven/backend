import { createDailyJournal } from './create'
import { findAllDailyJournal, findDetailDailyJournal } from './find'
import { removeDailyJournal } from './remove'
import { updateDailyJournal } from './update'

export const dailyJournalController = {
  findAll: findAllDailyJournal,
  findDetail: findDetailDailyJournal,
  create: createDailyJournal,
  remove: removeDailyJournal,
  update: updateDailyJournal
}

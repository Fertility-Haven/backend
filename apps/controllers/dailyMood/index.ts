import { createDailyMood } from './create'
import { findAllDailyMood, findDetailDailyMood } from './find'
import { removeDailyMood } from './remove'
import { updateDailyMood } from './update'

export const dailyMoodController = {
  findAll: findAllDailyMood,
  findDetail: findDetailDailyMood,
  create: createDailyMood,
  remove: removeDailyMood,
  update: updateDailyMood
}

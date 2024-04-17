/* eslint-disable @typescript-eslint/indent */
import { DataTypes, type Model, type Optional } from 'sequelize'
import { sequelize } from '.'
import { type ZygoteAttributes, ZygoteModel } from './zygote'

export interface DailyJournalAttributes extends ZygoteAttributes {
  dailyJournalId: string
  dailyJournalUserId: string
  dailyJournalTitle: string
  dailyJournalDescription: string
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type DailyJournalCreationAttributes = Optional<
  DailyJournalAttributes,
  'id' | 'createdAt' | 'updatedAt'
>

// We need to declare an interface for our model that is basically what our class would be
interface DailyJournalInstance
  extends Model<DailyJournalAttributes, DailyJournalCreationAttributes>,
    DailyJournalAttributes {}

export const DailyJournalModel = sequelize.define<DailyJournalInstance>(
  'daily_journal',
  {
    ...ZygoteModel,
    dailyJournalId: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    dailyJournalUserId: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    dailyJournalTitle: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    dailyJournalDescription: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  },
  {
    ...sequelize,
    timestamps: false,
    tableName: 'daily_journal',
    deletedAt: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    engine: 'InnoDB'
  }
)

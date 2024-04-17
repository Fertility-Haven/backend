/* eslint-disable @typescript-eslint/indent */
import { DataTypes, type Model, type Optional } from 'sequelize'
import { sequelize } from '.'
import { type ZygoteAttributes, ZygoteModel } from './zygote'

export interface DailyMoodAttributes extends ZygoteAttributes {
  dailyMoodId: string
  dailyMoodUserId: string
  dailyMoodExpression:
    | 'Angry'
    | 'Happy'
    | 'Sad'
    | 'Afraid'
    | 'Anxious'
    | 'Confused'
    | 'Relaxed'
    | 'Disappointed'
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type DailyMoodCreationAttributes = Optional<
  DailyMoodAttributes,
  'id' | 'createdAt' | 'updatedAt'
>

// We need to declare an interface for our model that is basically what our class would be
interface DailyMoodInstance
  extends Model<DailyMoodAttributes, DailyMoodCreationAttributes>,
    DailyMoodAttributes {}

export const DailyMoodModel = sequelize.define<DailyMoodInstance>(
  'daily_mood',
  {
    ...ZygoteModel,
    dailyMoodId: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    dailyMoodUserId: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    dailyMoodExpression: {
      type: DataTypes.ENUM(
        'Angry',
        'Happy',
        'Sad',
        'Afraid',
        'Anxious',
        'Confused',
        'Relaxed',
        'Disappointed'
      ),
      allowNull: false
    }
  },
  {
    ...sequelize,
    timestamps: false,
    tableName: 'daily_mood',
    deletedAt: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    engine: 'InnoDB'
  }
)

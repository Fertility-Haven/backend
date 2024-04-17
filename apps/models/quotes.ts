/* eslint-disable @typescript-eslint/indent */
import { DataTypes, type Model, type Optional } from 'sequelize'
import { sequelize } from '.'
import { type ZygoteAttributes, ZygoteModel } from './zygote'

export interface QuotesAttributes extends ZygoteAttributes {
  quoteId: string
  quoteText: string
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type QuotesCreationAttributes = Optional<
  QuotesAttributes,
  'id' | 'createdAt' | 'updatedAt'
>

// We need to declare an interface for our model that is basically what our class would be
interface QuotesInstance
  extends Model<QuotesAttributes, QuotesCreationAttributes>,
    QuotesAttributes {}

export const QuotesModel = sequelize.define<QuotesInstance>(
  'quotes',
  {
    ...ZygoteModel,
    quoteId: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    quoteText: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  },
  {
    ...sequelize,
    timestamps: false,
    tableName: 'quotes',
    deletedAt: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    engine: 'InnoDB'
  }
)

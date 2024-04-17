/* eslint-disable @typescript-eslint/indent */
import { DataTypes, type Model, type Optional } from 'sequelize'
import { sequelize } from '.'
import { type ZygoteAttributes, ZygoteModel } from './zygote'
import { UserModel } from './user'

export interface BookingAttributes extends ZygoteAttributes {
  bookingId: string
  bookingPatientId: string
  bookingTherapistId: string
  bookingStatus: 'waiting' | 'accepted' | 'cancel'
}

// we're telling the Model that 'id' is optional
// when creating an instance of the model (such as using Model.create()).
type BookingCreationAttributes = Optional<
  BookingAttributes,
  'id' | 'createdAt' | 'updatedAt'
>

// We need to declare an interface for our model that is basically what our class would be
interface BookingInstance
  extends Model<BookingAttributes, BookingCreationAttributes>,
    BookingAttributes {}

export const BookingModel = sequelize.define<BookingInstance>(
  'booking',
  {
    ...ZygoteModel,
    bookingId: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    bookingPatientId: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    bookingTherapistId: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4
    },
    bookingStatus: {
      type: DataTypes.ENUM('waiting', 'accepted', 'cancel'),
      allowNull: false,
      defaultValue: 'waiting'
    }
  },
  {
    ...sequelize,
    timestamps: false,
    tableName: 'booking',
    deletedAt: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    engine: 'InnoDB'
  }
)

UserModel.hasOne(BookingModel, {
  sourceKey: 'userId',
  foreignKey: 'bookingPatientId'
})

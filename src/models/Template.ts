import { model, Schema, SchemaDefinition } from 'mongoose'

const schema: SchemaDefinition = {
  name: String,
}

export default model('Template', new Schema(schema))

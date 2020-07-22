"""empty message

Revision ID: 711f817125f9
Revises: e5396a8c62db
Create Date: 2020-07-15 23:16:53.502705

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '711f817125f9'
down_revision = 'd41dc6eb7f5d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('patient', sa.Column('gestationalTimestamp', sa.BigInteger(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('patient', 'gestationalTimestamp')
    # ### end Alembic commands ###

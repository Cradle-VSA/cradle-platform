"""new covid reading changes

Revision ID: 3d49263fe82c
Revises: a1913287ffaf
Create Date: 2020-07-24 01:30:48.727157

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = "3d49263fe82c"
down_revision = "a1913287ffaf"
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column(
        "patient", sa.Column("householdNumber", sa.String(length=50), nullable=True)
    )
    op.add_column("reading", sa.Column("oxygenSaturation", sa.Integer(), nullable=True))
    op.add_column("reading", sa.Column("respiratoryRate", sa.Integer(), nullable=True))
    op.add_column("reading", sa.Column("temperature", sa.Integer(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column("reading", "temperature")
    op.drop_column("reading", "respiratoryRate")
    op.drop_column("reading", "oxygenSaturation")
    op.drop_column("patient", "householdNumber")

    # ### end Alembic commands ###

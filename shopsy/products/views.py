from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from .models import Product
from rest_framework.filters import SearchFilter, OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend
from .serializers import ProductDetailSerializer, ProductListSerializer

# Create your views here.
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]
    lookup_field = 'slug'
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['category', 'price', 'is_featured']
    search_fields = ['name', 'category', 'description']
    ordering_fields = ['price', 'created_at']

    def get_serializer_class(self):
        """
        Return different serializers for list and detail views
        """
        if self.action == 'list':
            return ProductListSerializer
        return ProductDetailSerializer

    @action(detail=False, methods=['get'])
    def featured(self, request):
        """
        Return featured products
        """
        featured_products = self.get_queryset().filter(is_featured=True)
        serializer = self.get_serializer(featured_products, many=True)
        return Response(serializer.data)